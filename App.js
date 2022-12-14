setInterval(() => {
  const d = new Date();
  const hTime = d.getHours();
  const mTime = d.getMinutes();
  const sTime = d.getSeconds();
  hRotation = 30 * hTime * (mTime / 2);
  mRotation = 6 * mTime;
  sRotation = 6 * sTime;
  hour.style.transform = `rotate(${hRotation}deg)`;
  minutes.style.transform = `rotate(${mRotation}deg)`;
  seconds.style.transform = `rotate(${sRotation}deg)`;
}, 1000);

/*
  12 Hours ke liye aap 360 degree rotate karte ho
   To aap 1 Hour ke liye rotate karoge 360/12 ,means 30 degree matlab 12 se 1 prr aane ke liye 30 degree 
   rotate karna pdd rha hai hour end ko ,To Obiviously n Hours rotate karne ke liye hour end 
  ko 30h rotate karna padega aur ha kuch rotation minute aur second end kiii wajah se 
  bhi aayega so uss aaye rotation ko bhi hum 30h mai add krr denge 
  
  avv 60 minutes 30 degree ka rotation lekar aate hai to 1 minute 1/2 ka rotation
  lekar aayenge ,to 'm' minutes lekar aayenge 'm/2' ka rotation  


So from above theory
    
 1.   formula for hour rotation= (30h +'m/2') 
     
     hour formule mai second ka rotation isliye nii liya kyuki wo bahut ke 
     neglable rotate karega so usko hum krr sakte hai avoid
    
 deriving formula for minutes end
   see
        60 Min=360 degree ka rotation lekar aayenge 
        1 minute=(360/60) =6 degree rotation lekar aayenge
        so 
        'm' minutes lekar aayenge 6m ka rotation so formula for minutes end will be
  
 2. formula for minute rotation=6m
                      in above formula we are avoiding second end rotation becz it will be 
                      neglible

3.formula for second end rotation
         60 seconds =360 ka rotation lekar aayenge
         1 second=360/60  =6 degree ka rotation layenge 
    so
     formula will 6s





*/
