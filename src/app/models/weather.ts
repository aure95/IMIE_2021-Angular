export class Weather {
    description!: string;
    icon!: string;

    setIcon(icon:string) {
        this.icon = 'http://openweathermap.org/img/w/'+ icon + '.png';
    }
}
