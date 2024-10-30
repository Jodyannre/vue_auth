<template>
    <h1>Social Login</h1>
    <button @click="loginFacebook">Login with facebook</button>
    <button @click="loginGoogle">Login with google</button>
    <button @click="loginTwitter">Login with twitter</button>
    <button @click="loginGithub">Login with github</button>
</template>
  
<script lang="ts" setup>
    import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth';
    import { getAuth, signInWithPopup } from 'firebase/auth';

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    const loginGoogle = () =>{
        signInWithPopup(auth, googleProvider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            alert('Login success')
        }).catch((error)=>{
            alert('Login failed')
            console.log(error)
        })
    }

    const loginFacebook = () =>{
        signInWithPopup(auth, facebookProvider).then((result)=>{
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            alert('Login success')
        }).catch((error)=>{
            alert('Login failed')
            console.log(error)
        })
    }

    const loginTwitter = () =>{
        signInWithPopup(auth, twitterProvider).then((result)=>{
            const credential = TwitterAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            alert('Login success')
        }).catch((error)=>{
            alert('Login failed')
            console.log(error)
        })
    }

    const loginGithub = () => {
        signInWithPopup(auth, githubProvider).then((result)=>{
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            alert('Login success')
        }).catch((error)=>{
            alert('Login failed')
            console.log(error)
        })
    }

</script>
  
<style scoped>
</style>
  