import { Component,Prop } from '@stencil/core';


@Component({
  tag: 'card-component',
})
export class CardComponent {

    @Prop() title: string = '';
    @Prop() subtitle: string = '';
    @Prop() text: string = '';

    render(){
        return(
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>{this.subtitle}</ion-card-subtitle>
                    <ion-card-title>{this.title}</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    {this.text}
                </ion-card-content>
            </ion-card>
        );
    }

}