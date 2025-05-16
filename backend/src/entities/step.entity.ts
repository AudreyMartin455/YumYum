import {AbstractEntity} from "./abstract.entity";

export interface StepEntity extends AbstractEntity {
    order: number,
    label: string
}