export class RestapiService {

  public baseUrl = 'https://disttickets.northeurope.cloudapp.azure.com/';

  public authUrl(): string {
    return this.baseUrl.concat('UserLogin');
  }

  public showUrl(): string {
    return this.baseUrl.concat('Show/');
  }

  public customerUrl(): string {
    return this.baseUrl.concat('Customer/');
  }
}
