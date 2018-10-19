import {Component, OnInit, ViewChild} from '@angular/core';
import {ValuteRateService} from '../shared/service/valute-rate.service';
import {Observable} from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface ValuteRate {
  name: string;
  position: number;
  rate: number;
  symbol: string;
}

@Component({
  selector: 'wma-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {
   private dataSource: MatTableDataSource<ValuteRate>;
   private displayedColumns: string[] = ['position', 'name', 'rate', 'symbol'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   private base: string;

  constructor(private  valuteRateService: ValuteRateService) {
  }

  ngOnInit() {
    Observable
      .combineLatest(
        this.valuteRateService.getCurrency(),
        this.valuteRateService.getCurrencyName()
      )
      .subscribe(
        (data) => {
          const result = Object
            .keys(data[0][0])
            .map((key, ind) => {
                  return {
                        position: ++ind,
                        rate: data[0][0][key],
                        name: data[1][key],
                        symbol: key
                      };
            });
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.base = data[0][1];
        });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

