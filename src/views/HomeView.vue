<script setup lang="ts">
import { ref } from "vue";
import { loremTen } from "@/data/lorem";
import { useUser } from '@/composables/useUser.ts'
import { useElementSeen } from '@/composables/useElementSeen.ts'


const targetImage = ref(null);
const { user, error, loading } = useUser();
const { elementSeen } = useElementSeen(targetImage);

</script>

<template>
  <div>
    <p v-for="(lor, ind) in loremTen" :key="ind">
      {{ ind+1 }}). {{ lor }}
    </p>
    <img 
      v-if="user" 
      :src="user.avatar" 
      :alt="`avatar of ${user.first_name} ${user.last_name}`" 
      ref="targetImage"
    />
    <p v-if="error">Error happened :(</p>
    <p v-if="loading">...</p>
    <p v-for="(lor, ind) in loremTen" :key="ind">{{ lor }}</p>
    <p v-for="(lor, ind) in loremTen" :key="ind">
      {{ ind+11 }}). {{ lor }}
    </p>
  </div>
</template>
