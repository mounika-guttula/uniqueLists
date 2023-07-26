List1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan'];
List2=[ 'Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav'];

userList1 = [];
userList2 = [];
commonUserList = [];


for(let i = 0; i<List1.length;i++){
    if (List2.includes(List1[i]) === false){
        userList1.push(List1[i]);
    }

}

for(let i = 0;i < List2.length; i++){
    if (List1.includes(List2[i])=== false){
        userList2.push(List2[i]);
    }
}

for(let i = 0; i < List1.length; i++){
    if (List2.includes(List1[i]) === true){
        commonUserList.push(List1[i]);
    }
}





console.log(userList1);
console.log(userList2);
console.log(commonUserList);