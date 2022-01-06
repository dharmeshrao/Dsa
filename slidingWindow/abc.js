
// 1 2 3 4 5
//4 5 6                 7
while(temp1.next && temp2.next){
    if(temp1 === temp2)return temp.data;
    else {
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
}
return -1;



