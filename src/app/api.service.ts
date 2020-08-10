import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentSurvey } from './student-survey';


/*
Author : Devika Walavalkar
This file is the business logic for the api calls for POST and GET 
*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiGetItemURL:string = 'https://5jrtmxw07i.execute-api.us-east-1.amazonaws.com/get_item/';
  apiDeleteItem : string = 'https://5jrtmxw07i.execute-api.us-east-1.amazonaws.com/delete_record/';
  surveylist : any;
  apiGetItem : string;
  deleteItem : string;

  constructor(private httpClient: HttpClient) { }

  public createSurvey(savestudent: StudentSurvey){
    console.log("Sending data", savestudent);
    return this.httpClient.post(`https://5jrtmxw07i.execute-api.us-east-1.amazonaws.com/put_record/studentinfo`,savestudent);
  }
  public getStudentData(){
  return this.httpClient.get(`https://5jrtmxw07i.execute-api.us-east-1.amazonaws.com/get_records/studentinfo`);
  }

  public updateStudentData(updateStudent: StudentSurvey){
    console.log("Updating student");
    return this.httpClient.put('https://5jrtmxw07i.execute-api.us-east-1.amazonaws.com/update_record/studentinfo', updateStudent);
  }

  public deleteStudentData(s : string){
    console.log("Deleting student");
    this.deleteItem = "";
    this.deleteItem = this.apiDeleteItem.concat(s);
    return this.httpClient.delete(this.deleteItem);
  }

  public getItem(s : string){
    this.apiGetItem = "";
    this.apiGetItem = this.apiGetItemURL.concat(s);
    return this.httpClient.get(this.apiGetItem);
  }
}