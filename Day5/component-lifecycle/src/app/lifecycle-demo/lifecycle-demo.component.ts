import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataService } from '../data.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css'],
})
export class LifecycleDemoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() inputData: any;
  data: any;
  error: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    // Clean up resources here
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputData'] && !changes['inputData'].firstChange) {
      this.inputData = changes['inputData'].currentValue;

      this.fetchData();
    }
  }

  private fetchData(): void {
    this.dataService
      .getData()
      .pipe(
        catchError((error) => {
          this.error = error;
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.data = data.data;
        console.log(data.data, 'data');
      });
  }
}
