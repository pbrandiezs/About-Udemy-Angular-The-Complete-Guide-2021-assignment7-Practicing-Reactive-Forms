import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  statusses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        // 'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'projectName': new FormControl(null, [Validators.required], this.forbiddenNames),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl(null, [Validators.required])
      })
    });

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
    if (this.projectForm.valid) {
      console.log('Project Name is: ' + this.projectForm.value.projectData.projectName);
      console.log('Email is: ' + this.projectForm.value.projectData.email);
      console.log('Project Status is: ' + this.projectForm.value.projectData.projectStatus);
    } else {
      console.log("Invalid!!");
    }
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
