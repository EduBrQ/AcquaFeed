import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export type ChartOptions = {
  series: any;
  chart: any;
  xaxis: any;
  dataLabels: any;
  stroke: any;
  title: any;
};

const STORAGE_KEY = 'aquafeed-racao-data';

@Component({
  selector: 'app-racao-tabela',
  templateUrl: './racao-tabela.component.html',
  styleUrls: ['./racao-tabela.component.scss'],
  standalone: false
})
export class RacaoTabelaComponent implements AfterViewInit {
  filtroData: Date | null = null;
  filtroViveiro: string = '';
  racaoData: any[] = [];
  public chartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Consumo de Ração por Dia'
    },
    xaxis: {
      categories: []
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1
    }
  };

  displayedColumns: string[] = ['data', 'viveiro', 'manha', 'tarde', 'total'];
  dataSource = new MatTableDataSource(this.racaoData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.carregarDados();
  }

  ngOnInit() {
    this.atualizarGrafico();
  }

  ngDoCheck() {
    this.salvarDados();
    this.atualizarGrafico(); // Atualiza se filtros mudarem
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  get racaoFiltrada() {
    return this.racaoData.filter(item => {
      const dataMatch = this.filtroData
        ? new Date(item.data).toDateString() === this.filtroData.toDateString()
        : true;
      const viveiroMatch = this.filtroViveiro
        ? item.viveiro.toLowerCase().includes(this.filtroViveiro.toLowerCase())
        : true;
      return dataMatch && viveiroMatch;
    });
  }

  limparFiltros(): void {
    this.filtroData = null;
    this.filtroViveiro = '';
    this.dataSource.data = this.racaoData; // Atualiza a tabela
  }

  addLinha(): void {
    this.racaoData.push({ data: new Date(), viveiro: this.filtroViveiro || '', manha: 0, tarde: 0 });
    this.dataSource.data = this.racaoData; // Atualiza a tabela
    this.salvarDados(); // salva após adicionar
  }

  calcularTotal(manha: number, tarde: number): number {
    return manha + tarde;
  }

  exportarExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(
      this.racaoFiltrada.map(item => ({
        Data: item.data.toLocaleDateString(),
        Viveiro: item.viveiro,
        'Ração Manhã (kg)': item.manha,
        'Ração Tarde (kg)': item.tarde,
        'Total (kg)': this.calcularTotal(item.manha, item.tarde)
      }))
    );
    const workbook = { Sheets: { 'Ração': worksheet }, SheetNames: ['Ração'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    FileSaver.saveAs(new Blob([excelBuffer]), `relatorio-racao-${new Date().toISOString()}.xlsx`);
  }

  exportarPDF(): void {
    const doc = new jsPDF();
    const dados = this.racaoFiltrada.map(item => [
      item.data.toLocaleDateString(),
      item.viveiro,
      item.manha,
      item.tarde,
      this.calcularTotal(item.manha, item.tarde)
    ]);

    (doc as any).autoTable({
      head: [['Data', 'Viveiro', 'Manhã (kg)', 'Tarde (kg)', 'Total (kg)']],
      body: dados
    });

    doc.save(`relatorio-racao-${new Date().toISOString()}.pdf`);
  }

  get totalGeralDoDia(): number {
    return this.racaoFiltrada.reduce((soma, item) => {
      return soma + this.calcularTotal(item.manha, item.tarde);
    }, 0);
  }

  atualizarGrafico() {
    const dadosPorData = new Map<string, number>();

    this.racaoFiltrada.forEach(item => {
      const dataStr = new Date(item.data).toLocaleDateString();
      const total = this.calcularTotal(item.manha, item.tarde);
      dadosPorData.set(dataStr, (dadosPorData.get(dataStr) || 0) + total);
    });

    const categorias = Array.from(dadosPorData.keys());
    const valores = Array.from(dadosPorData.values());

    this.chartOptions.series = [
      {
        name: 'Total de Ração (kg)',
        data: valores
      }
    ];
    this.chartOptions.xaxis = {
      categories: categorias
    };
  }

  carregarDados() {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);
    if (dadosSalvos) {
      this.racaoData = JSON.parse(dadosSalvos).map((item: any) => ({
        ...item,
        data: new Date(item.data)
      }));
    } else {
      // Dados iniciais mock
      this.racaoData = [
        { data: new Date(), viveiro: 'Viveiro 1', manha: 5, tarde: 4 }
      ];
    }
    this.dataSource.data = this.racaoData; // Atualiza a tabela
  }

  salvarDados() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.racaoData));
  }
}
