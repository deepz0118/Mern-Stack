unction success()
{
    console.log("Success")
}
function fail()
{
    console.log("Fail")
}
function ResponseFailed()
{
    console.log("Response failed")
}
function exec(data,callback)
{
    console.log('balance : ${data}');
}
setTimeout(callback,3000)
function trigger()
{
    const data=1
    if(data>0)
    {
        exec(data,success)
    }
    else if(data <=0){
        exec(data,fail)
    }
    else{
        exec(fail)
    }
}
trigger()
async function API()
{
    const response=await fetch("https://mockapi.io/clone/66e526f85cc7f9b6273c6caf")
    const data=response.json()
    return data;
}
API()
const Apidata=API()
