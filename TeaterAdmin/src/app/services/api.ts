export * from './administrator.service';
import { AdministratorService } from './administrator.service';

export * from './booking.service';
import { BookingService } from './booking.service';
export * from './customer.service';
import { CustomerService } from './customer.service';
export * from './show.service';
import { ShowService } from './show.service';
export const APIS = [AdministratorService, BookingService, CustomerService, ShowService];
