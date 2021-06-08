import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl(null, [Validators.required])
      })
    });

    // this.projectForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
    this.projectForm.setValue({
      'projectData': {
        'projectName': '',
        'email': '',
        'projectStatus': 'Stable'
      }
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
