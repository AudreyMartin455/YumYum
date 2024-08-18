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
    <Heading variant="h3" icon="edit_note">Préparation</Heading>
    <div v-for="(step, index) in steps">
      <div class="flex flex-row"
           style="place-content: center flex-start;align-items: center; margin: 8px">
        <P-Textarea v-model="step.label" rows="5" cols="50" autoResize :placeholder="`Etape n°${index + 1}`"
                    style="margin-right: 8px;"/>
        <IconButton v-if="steps.length > 1" icon="remove" variant="filled" @click="removeStep(index)"/>
      </div>
      <div class="flex flex-row" style="justify-content: center">
        <IconButton v-if="index === steps.length - 1" icon="add" variant="filled" @click="addStep"/>
      </div>
    </div>
  </div>
</template>
