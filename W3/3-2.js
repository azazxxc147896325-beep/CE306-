let PP = 700
let DP = 20
let DA = (PP*DP)/100;
let FP = PP - DA;

if (FP<=0){
    console.log("ราคาสินค้าหลังหักส่วนลด : 0 บาท")
}else if (FP <= 500){
    console.log ("ราคาสินค้าหลังหักส่วนลด :" +FP+ "บาท")
    console.log ("มีค่าธรรมเนียมจัดส่ง 50 บาท")
    console.log ("ราคาทั้งหมด:"+(FP+50)+"บาท");
}else {
    let SD = FP *0.10;
    let newP = FP - SD;
    console.log("ราคาสินค้าหลังหักส่วนลดพิเศษ 10%" + newP + "บาท");
}

