import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  voterSearch: FormGroup;
  errorMessage = "";
  constructor() {
    this.voterSearch = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      dl: new FormControl("", Validators.required)
    });
  }

  resetForm() {
    this.errorMessage = "";
  }

  submitForm(formData) {
    if (!formData || formData.status == "INVALID") {
      this.errorMessage = "All fields required";
    } else if (formData.status == "VALID") {
      console.log(formData);
    }
  }
}
