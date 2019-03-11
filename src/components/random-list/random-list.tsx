import { Component,State  } from '@stencil/core';

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
      return ele != value;
  });
}


@Component({
  tag: 'random-list',
  styleUrl:'random-list.css'
})
export class RandomList {
  @State() value: string;
  @State() elements = [];

  @State() result="";

  toList(){
    this.elements = [
      ...this.elements,
      this.value
    ]
  }

  changeElement(event) {
    this.value = event.target.value;
    console.log(this.value);
  }

  deleteElement(name){
    this.elements = arrayRemove(this.elements, name);
    console.log(this.elements);
  }

  setResult(){
    var randomElement =  this.elements[Math.floor(Math.random()*this.elements.length)]
    this.result=randomElement;
  }

  render() {
      return [
        <ion-header>
          <ion-toolbar >
            <ion-title>Randomizer</ion-title>
          </ion-toolbar>
        </ion-header>,
  
        <ion-content >
        {this.result == "" ? (
          <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card >
                <ion-card-header color="secondary">
                    <ion-card-title>Add element to list</ion-card-title>
                </ion-card-header>
          
                <ion-card-content>
                  <ion-input type="text" value={this.value} onChange={(event) => this.changeElement(event)} />
                  <ion-button  color="primary" onClick={()=>{this.toList()}} expand="full">Add</ion-button>
                </ion-card-content>
            </ion-card>
            </ion-col>
            <ion-col>
              <ion-card >
                  <ion-card-header color="secondary">
                      <ion-card-title>Elements</ion-card-title>
                  </ion-card-header>
                  <br></br>
                  <ion-card-content>
                    <div>
                    {this.elements.map((element) =>
                      <ion-item >
                      <ion-label>
                        {element}
                      </ion-label>
                        <ion-button color="primary" onClick={()=>{this.deleteElement(element)}} slot="end"> 
                          <ion-icon  slot="start" name="trash"></ion-icon>
                          Delete
                        </ion-button>
                      </ion-item>                      
                      )}  
                      </div>
                  </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <ion-button expand="full" onClick={()=>{this.setResult()}}>Randomize</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        ):(
          <ion-card>
            <ion-item>
              <ion-icon name="star"></ion-icon>
              <ion-label>Congratulations!</ion-label>
            </ion-item>

            <ion-card-content>
             <h1>{this.result}</h1>
            </ion-card-content>
          </ion-card>
        )
        }


          
        </ion-content>
      ];
    }
  }

