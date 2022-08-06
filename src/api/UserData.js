
function getUser(){
    const user_data = {
        'user_id': '123456',
        'avatar': 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
        'name': 'John Doe',
        'gender': 'Male',
        'age': '24',
        'timestamp': '09 June 2021, 01:20 PM',
        'doctor': {
            'name':'Dr. Joe Tribbiani',
            'type': 'General Medicine',
            'description': 'Amet minim non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' 
        }
    }
    return(
        {user_data}
    );
}

export default getUser;