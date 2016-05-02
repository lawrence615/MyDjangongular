import {Pipe, PipeTransform} from "angular2/core";
@Pipe({
    name: 'facilitiesFilter'
})

export class FacilitiesFilterPipe implements PipeTransform {

    transform(value:any, args:any[]):any {
        let filter = args[0].toLocaleLowerCase();
        return filter ? value.filter(facility => facility.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}