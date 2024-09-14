function success()
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
}
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
        exec
    }
}