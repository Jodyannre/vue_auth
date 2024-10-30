import { Ref, ref } from 'vue'
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth'


class AuthService{
    private jwt: Ref<string>
    private error: Ref<string>

    constructor(){
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt() : Ref<string> {
        return this.jwt
    }

    getError(): Ref<string> {
        return this.error
    }

    async login(email:string,password:string): Promise<boolean> { 
        try{
            const url = 'http://localhost:3000/login'
            const res = await fetch(url,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email,password:password})
            })

            const response = await res.json()

            if ('errors' in response){
                this.error.value = 'Login failed'
                return false
            }

            this.jwt.value = response.data.access_token
            return true

        }catch(err){
            console.error(err)
        }
        return false
    }
}


export default AuthService