import { RoomData } from './../_models/roomData';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { interval } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  rooms: RoomData[] = [];
  showInfo = false;
  // i add id in this place because i didnot know if Client ham more than one house
  id = 'hus1';
  baseUrl = environment.baseUrl;
  isWarning = false;
  hubConnection: HubConnection;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.hubConnection = new HubConnectionBuilder().withUrl('http://localhost:5000/data').build();
    this.hubConnection.start();
    this.hubConnection.on('refresh', () => {
      this.getValue(this.id);
    });
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>
      this.hubConnection.invoke('refresh'));

  }
  getValue(id) {
    this.roomService.getRoomsInfo(id).subscribe(
      response => {
        this.rooms = response;
      },
      error => {
        // only in development mode
        console.log(error);
      }
    );
  }
  showRoomsInfo() {
    if (this.rooms.length > 0) {
      this.showInfo = true;
    } else {
      this.isWarning = true;
    }



  }
  hideRoomsInfo() {
    this.showInfo = false;
    if (this.isWarning) { this.isWarning = false; }

  }

}
