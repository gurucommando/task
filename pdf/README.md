----------- Pdf Task -----------

 1. Firstly you call user API  (http://localhost:8080/addUser)

    {
        firstName: "ram",
        lastName: "patel",
    }
    after call this api In response get an _id  of the user.


2. Than call the Number API (http://localhost:8080/number) and also pass the user ID 

        {
        "number":"A 123",
        "uuid":"65312a7149ba8fb50f7ba502"
        }
3. Than call the User API (http://localhost:8080/address) and same to same also pass the user ID

        {
            "number":"B 123",
            "uuid":"65312a7149ba8fb50f7ba502"
        }

4. Than call the Email API (http://localhost:8080/getUser)

        get all user data
 

 The PDF is Generated by this API 



 route.post('/addUser',postUsercontroller) // add user
route.post('/address',postAdderssController)  // add address
route.post('/number',postNumberController)  // add number
route.get('/getUser',getUsercontroller) // get users