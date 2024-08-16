<script setup lang="ts">
import type {Step} from "~/stores/models/step.model";

const emits = defineEmits(['onChange'])
const props = defineProps(['steps'])

let steps = ref(props.steps ?? [<Step>{
  order: 1,
  label: ''
}] as Step[])


const addStep = function () {
  steps.value.push(<Step>{
    order: steps.value.length + 1,
    label: ''
  })
}
const removeStep = (removableIndex: number) => {
  steps.value = steps.value.filter((_: Step, index: number) => index !== removableIndex)
      .map((step: Step, index: number) => {
        return {...step, order: index + 1}
      })
}

watch(steps.value, (newSteps) => {
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
