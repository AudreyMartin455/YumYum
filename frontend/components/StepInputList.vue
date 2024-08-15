<script setup lang="ts">
import type {Step} from "~/stores/models/step.model";

const emits = defineEmits(['onChange'])
const props = defineProps(['steps'])

let steps = props.steps ?? [<Step>{
  order: 1,
  label: ''
}] as Step[]

const addStep = function () {
  steps.push(<Step>{
    order: steps.length + 1,
    label: ''
  })
}
const removeStep = function (removableIndex: number) {
  steps = steps.filter((_, index) => index !== removableIndex)
      .map((step, index) => {
        return {...step, order: index + 1}
      })
}

watch(steps, (newSteps) => {
  emits('onChange', newSteps)
})
</script>

<template>
  <div>
    <div v-for="(step, index) in steps">
      {{ step.order }}
      <Textarea v-model="step.label" rows="5" cols="30"/>
      <Button v-if="steps.length > 1" severity="danger" icon="pi pi-minus-circle" @click="removeStep(index)"/>
      <Button v-if="index === steps.length - 1" icon="pi pi-plus" @click="addStep"/>
    </div>
  </div>
</template>
