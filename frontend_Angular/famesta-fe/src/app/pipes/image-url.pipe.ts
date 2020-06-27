import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'TransalateImageUrl',
  pure: true
})
export class ImageUrlPipe implements PipeTransform {

  // public baseURL: string = "http://127.0.0.1:8000"

  public baseURL: string = environment.apiBaseUrl

  transform(value: any, args?: any): any {
    if (value) {
      let value1 = this.baseURL +'' + value;
      return value1
  }
  return value;
  }

}
