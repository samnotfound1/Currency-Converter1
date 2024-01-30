

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };let myURL=  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let result=document.querySelector(".result");
let select=document.querySelectorAll(".options select");
let select1=select[0]
let select2=select[1]
 
let input1=document.querySelectorAll(".options input")[0];
let input2=document.querySelectorAll(".options input")[1];
const dropdowns = document.querySelectorAll(".dropdown select");

let btn=document.querySelector("button");


// populating the dropdowns with the currency codes
for (let select of dropdowns ) {
    
    for (currCode in countryList) {
      
     let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if(select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if(select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
  select.append(newOption);
     }
     select.addEventListener("change", (event) => {
   updateFlag(event.target);
     });
  }
  // updating the flag when the currency code is changed
  const updateFlag = (element) => {
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=element.parentElement.querySelector("img").src=newsrc;
  
  }


//   adding event listener to the convert button
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    
      
       
    let amount = document.querySelector(".input1 input").value;
    console.log(amount);
    if(amount == 0 || amount < 0) {
      alert("Please enter valid amount");
    
    }
    console.log(select1.value, select2.value);
    
    // fetching API data
    let finalURL=`${myURL}/${select1.value.toLowerCase()}/${select2.value.toLowerCase()}.json`;
    let response=await fetch(finalURL);
    let data=await response.json();
    let rate= data[select2.value.toLowerCase()];
    let finalAmount= amount * rate;
    let display=document.querySelector(".input2 input").value=finalAmount;
    let msg=document.querySelector(".rate");
    msg.innerText = `${amount} ${select1.value} = ${finalAmount} ${select2.value}`;
    
     });

    //  adding swap functionality and animation to the swap icon
     let swap=document.querySelector(".swap ");
   
        swap.addEventListener("click",()=>{
            swap.style.animation="rotate 0.3s 1 linear";
            let temp=select1.value;
            select1.value=select2.value;
            select2.value=temp;
            updateFlag(select1);
            updateFlag(select2);
        })





  