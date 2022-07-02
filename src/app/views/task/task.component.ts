import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task[] | undefined;

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit(): void {
    this.task = this.dataHandler.getTask();
  }

}
