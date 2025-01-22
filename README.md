First - front end devloped to addapted the reale check product (, authenticatedToken)

    #                 changet http://localhost:5800 to

to lick this : apiRequest.post("/auth/register"
try {
const res = await apiRequest.post("/auth/register", {
username,
email,
password,
});

    const getProductDetails = async()=>{
        try {
            let result = await fetch(`http://localhost:5800/product/${params.id}`);
            result = await result.json();
            setImg(result.img);
            setPrice(result.price);
            setName(result.name);
            setText(result.text);
        }catch (error){
            console.error("Error fetching product details:",error)
        }

    }
    const Update = async()=>{
        let result = await fetch(`http://localhost:5800/product/${params.id}`,{
            method: 'PUT',

---

- wen you fenished modification to type module
- make products work

...

- add users
- than (import { verifyToken } from "../middleware/verifyToken.js";)

...

- project user / userAdmin # do project to know this consept ...
- user admin / authe (change it more profetionall)
