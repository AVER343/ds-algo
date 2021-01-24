let lastNumber=1,secondLastnumber=0 ,nextNumber
for(i=2;i<=239;i++)
{
    nextNumber=lastNumber+secondLastnumber
    secondLastnumber=lastNumber
    lastNumber=nextNumber
}