<template>
    <h1>Auth View</h1>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    v-model="email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    v-model="password">
            </div>
            <button type="submit" class="btn btn-primary mt-2" v-on:click.prevent="login">Submit</button>
        </form>
    </div>
</template>
  
<script lang="ts" setup>
    import { ref, Ref } from 'vue'
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { getAuth } from 'firebase/auth'
    import CookiesService from '@/services/CookiesService';

    let email: Ref<string> = ref('')
    let password: Ref<string> = ref('')
    let cookiesService = new CookiesService()   

    const login = async () => {
        const auth = getAuth()
        try {
            const result = await signInWithEmailAndPassword(auth, email.value, password.value)
            const user = await result.user.getIdTokenResult()
            cookiesService.setCookie('token', user.token)
            alert('Login success')
        } catch (error) {
            alert('Login failed')
        }
    }

</script>
  
<style scoped>
</style>
  
