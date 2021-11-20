<template>
  <div class="akin w-screen h-screen flex flex-col items-center justify-center bg-light-grayish-cyan1" @click.self="activeButtonHandler">

    <!-- title starts -->
    <div class="title -mt-16 ">
      <h1 class="text-very-dark-cyan font-space-mono font-bold text-2xl">SPLI
        <br />
        TTER
      </h1>
    </div>
    <!-- title ends -->

    <!-- tip calculator container starts -->
    <div class="tip-calculator-container grid grid-cols-2 px-8 py-6 gap-x-10 mt-16 h-height55 2xl:h-height50 w-3/5  bg-white rounded-3xl">
      <div id="first-half" class="first-half  rounded-xl ">
        <div class="bill">
          <label for="bill" class="font-space-mono text-dark-grayish-cyan1 font-bold block mb-1.5">Bill</label>
          <div class="input-box relative flex items-center ">
            <div class="icon absolute left-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                <path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/>
              </svg>
            </div>
            <input v-model="bill" type="text" class="w-full outline-none text-right font-bold text-very-dark-cyan text-xl font-space-mono py-2 pl-8 pr-4 transition-all duration-300 ease-in-out rounded bg-light-grayish-cyan2" placeholder="0">
          </div>
        </div>

        <!-- select tip % -->
        <div class="select-tip mt-8">
            <label for="tip" class="font-space-mono text-dark-grayish-cyan1 font-bold block mb-3">Select Tip %</label>
            <div class="options grid grid-cols-3 gap-x-4 gap-y-4">
              <button id="5" class="rounded-md tb hover:bg-light-grayish-cyan1  hover:text-very-dark-cyan duration-100 ease-linear px-4 py-1.5 text-white font-space-mono font-bold text-xl bg-very-dark-cyan " @click="activeButtonHandler">5%</button>
              <button id="10" class="rounded-md tb hover:bg-light-grayish-cyan1 hover:text-very-dark-cyan duration-100 ease-linear px-4 py-1.5 text-white font-space-mono font-bold text-xl bg-very-dark-cyan " @click="activeButtonHandler">10%</button>
              <button id="15" class="rounded-md tb hover:bg-light-grayish-cyan1 hover:text-very-dark-cyan duration-100 ease-linear px-4 py-1.5 text-white font-space-mono font-bold text-xl bg-very-dark-cyan " @click="activeButtonHandler">15%</button>
              <button id="25" class="rounded-md tb hover:bg-light-grayish-cyan1 hover:text-very-dark-cyan duration-100 ease-linear px-4 py-1.5 text-white font-space-mono font-bold text-xl bg-very-dark-cyan " @click="activeButtonHandler">25%</button>
              <button id="50" class="rounded-md tb hover:bg-light-grayish-cyan1 hover:text-very-dark-cyan duration-100 ease-linear px-4 py-1.5 text-white font-space-mono font-bold text-xl bg-very-dark-cyan " @click="activeButtonHandler">50%</button>
              <input type="text" v-model="customTip"  placeholder="Custom" class="custom outline-none font-space-mono bg-light-grayish-cyan2 px-4 py-1.5 rounded" @keyup="customTipHandler"/>
            </div>
        </div>

        <!-- number of people -->
        <div class="number-of-people mt-6">
          <div class="div flex items-center justify-between">
            <label for="people" class="font-space-mono text-dark-grayish-cyan1 font-bold block mb-1.5">Number of people</label>
            <label v-if="validate" for="" class="font-space-mono text-red-600 font-bold block mb-1.5">Can't be zero</label>
          </div>
            <div class="input-box relative flex items-center ">
              <div class="icon absolute left-4 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                  <path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/>
                </svg>
              </div>
              <input v-model="numberOfPeople" type="number" min="0" :class="validateError" class="w-full outline-none text-right font-bold text-very-dark-cyan text-xl font-space-mono py-2 pl-8 pr-4 transition-all duration-300 ease-in-out rounded bg-light-grayish-cyan2" placeholder="0" @change="numberOfPeopleHandler" @keyup="numberOfPeopleHandler">
            </div>         
        </div>
      </div>
      <div class="second-half  flex flex-col justify-between rounded-xl bg-very-dark-cyan shadow-sm p-8">
       <div class="connt">
          <div class="tip-per-person mb-12 flex items-center justify-between">
            <div class="div">
              <h3 class="text-sm font-bold font-space-mono text-white">Tip Amount</h3>
              <h5 class="text-xs text-dark-grayish-cyan2 font-bold">/ person</h5>
            </div>
            <div class="value">
              <h1 class="text-strong-cyan font-bold font-space-mono text-5xl">
              ${{ displayTipAmountPerPerson }}
              </h1>
            </div>
          </div>
          <div class="total-per-person flex items-center justify-between">
            <div class="div">
              <h3 class="text-sm font-bold font-space-mono text-white">Total</h3>
              <h5 class="text-xs text-dark-grayish-cyan2 font-bold">/ person</h5>
            </div>
            <div class="value">
              <h1 class="text-strong-cyan font-bold font-space-mono text-5xl">
              ${{ displayTotalAmountPerPerson }}
              </h1>
            </div>
          </div>
       </div>
       <div class="reset-button">
         <button class="outline-none hover:bg-light-grayish-cyan1  hover:text-very-dark-cyan duration-100 ease-linear border-none text-very-dark-cyan font-space-mono font-bold bg-strong-cyan w-full px-8 py-2.5 rounded text-lg" @click="resetButtonHandler">RESET</button>
       </div>
      </div>
    </div>
    <!-- tip calculator container ends -->

  </div>
</template>


<script setup>

import { ref, computed } from 'vue';
// reactive variables
const selectedTipValue = ref(0.00);
const bill = ref("");
const numberOfPeople = ref("");
const totalMoneyPayable = ref(0.00);
const totalAmountPerPerson = ref(0.00);
const tipAmountPerPerson = ref(0.00);
const customTip = ref('');
const validate = ref(false);

// computed
const displayTotalAmountPerPerson = computed(()=> totalAmountPerPerson.value.toFixed(2));
const displayTipAmountPerPerson = computed(()=> tipAmountPerPerson.value.toFixed(2) );
const validateError = computed(()=> {
  return{
    'validate-error': validate.value
  }
});

const validateInputs = ()=>{
  if(bill.value === ''){
    return false;
  }
  if(numberOfPeople.value === ''){
    validate.value = true;
    return false;
   
  }
  return true;
}

const computeTip = (value)=>{
  if(validateInputs()){
   totalMoneyPayable.value = ((parseInt(value) / 100) * parseInt(bill.value)) + parseInt(bill.value);
  totalAmountPerPerson.value = (parseInt(totalMoneyPayable.value) / parseInt(numberOfPeople.value));
  tipAmountPerPerson.value = ((parseInt(value) / 100) * parseInt(bill.value) / parseInt(numberOfPeople.value));
}
}

const removeActiveButton = ()=>{
   const tipButtons = document.querySelectorAll('.options button');
    [...tipButtons].forEach( button =>{
    button.classList.remove('active-tip-button-option');
  });
}

const activeButtonHandler = (event)=>{
 
 
  removeActiveButton();  
  if(event.target.nodeName == 'BUTTON'){
    event.target.classList.add('active-tip-button-option');
    selectedTipValue.value = event.target.id;
    customTip.value = "";
    
    computeTip(selectedTipValue.value);
  }
}

const numberOfPeopleHandler = ()=>{
  validate.value = false;
  const val = selectedTipValue.value ? selectedTipValue.value : customTip.value;
  computeTip(val);
}

const customTipHandler = ()=>{
  removeActiveButton();
  computeTip(customTip.value);
}

const resetButtonHandler = ()=>{
  selectedTipValue.value = 0.00;
  bill.value = '';
  numberOfPeople.value = '';
  totalMoneyPayable.value = 0.00;
  totalAmountPerPerson.value = 0.00;
  tipAmountPerPerson.value = 0.00;
  customTip.value = '';
  validate.value = false;
}




</script>



<style scoped>

.title h1{
  letter-spacing: 0.3em;
}

input{
  border: 2px solid transparent;
}

.options button:active {
    transform: scale(.9);
    background-color: hsl(172, 67%, 45%);
color: hsl(183, 100%, 15%);
}

.tip-calculator-container{
  box-shadow: 0px 0px 24px rgba(0, 0, 0, .1);
}

input:active,
input:focus,
input:hover{
  border: 2px solid hsl(172, 67%, 45%);
}


.input-box input[type="text"]::-webkit-input-placeholder{
  font-family: "Space Mono", monospace;
  font-weight: 700;
  text-align: end;
  font-size: 1.2rem;
}


.custom,
.options input[type="text"]::-webkit-input-placeholder{
  font-family: "Space Mono", monospace;
  font-weight: 700;
  text-align: center;
  color: hsl(186, 14%, 43%);
  font-size: 1.2rem;
}

.active-tip-button-option{
background-color: hsl(172, 67%, 45%);
color: hsl(183, 100%, 15%);
}
/* validate error */
.validate-error{
  border: 2px solid red;
}

@media screen and (min-width: 1400px){
  .tip-calculator-container{
    height: 50vh;
  }

  .options button{
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
}
@media screen and (min-width: 1600px){
  .tip-calculator-container{
    height: 55vh;
  }
}
</style>
