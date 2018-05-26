import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { PERSONS } from '../models/person-mock';
import { Observable, of } from 'rxjs';

@Injectable()
export class MemberService {

  constructor() { }

  getPersonList(): Observable<Person[]> {
    return of(PERSONS);
  }
}
