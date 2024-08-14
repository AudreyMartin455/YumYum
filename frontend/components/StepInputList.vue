<script lang="ts">
import type {Step} from "~/stores/models/step.model";


export default {
  name: 'RecipeForm',
  data() {
    return {
      steps: [<Step>{
        order: 1,
        label: ''
      }] as Step[]
    }
  },
  methods: {
    addStep: function () {
      this.steps.push(<Step>{
        order: this.steps.length + 1,
        label: ''
      })
    },
    removeStep: function (removableIndex: number) {
      this.steps = this.steps.filter((_, index) => index !== removableIndex)
          .map((step, index) => {
            return {...step, order: index + 1}
          })
    },
  },
  watch: {
    steps: {
      immediate: true,
      handler(updatedSteps) {
        console.log(updatedSteps)
        this.$emit('onChange', updatedSteps)
      }
    }
  }
}
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
