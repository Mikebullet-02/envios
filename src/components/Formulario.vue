<template>
    <div class="tarifas">
        <h1>Tarifas preferenciales</h1>
        <h2>Para impulsar tu negocio</h2>
    </div>
    <div class="formbold-main-wrapper">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Nombre completo</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Escribe tu nombre"
          class="formbold-form-input"
          required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Teléfono</label>
        <input
          name="tel"
          id="tel"
          placeholder="Escribe tu número de teléfono"
          class="formbold-form-input"
               required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Ciudad</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Escribe tu ciudad"
          class="formbold-form-input"
          required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Nombre de tu empresa</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Escribe el nombre de tu empresa"
          class="formbold-form-input"
          required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Correo electrónico </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Escribe tu correo"
          class="formbold-form-input"
        />
      </div>
      <div class="text-left checkbox-wrapper">
        
<div class="text-left checkbox-wrapper">
  <input type="checkbox" id="terms" class="checkbox">
  <label class="checkbox-label" for="terms">De 20 a 50 envíos mensuales</label>
</div>
<div class="text-left checkbox-wrapper">
  <input type="checkbox" id="terms" class="checkbox">
  <label class="checkbox-label" for="terms">Más de 50 envíos mensuales</label>
</div>
      </div>
      <div>
        <button class="formbold-btn">Solicitar tarifa preferente</button>
      </div>
    </form>
    <div class="imagen1">
        <img src="../assets/dibujoform.png" alt="">
    </div>
    <div class="textos">
      <h3>Av. Central 56, Nueva Industrial Vallejo, Gustavo A. Madero, 07700, Ciudad de México.</h3>
      <h3>+52-55-51-41-43-00</h3>
      <h3>desarrollowebodm@gmail.com</h3>
    </div>
  </div>
</div>
  
</template>

<style>
.checkbox-wrapper {
  white-space: nowrap
}
.checkbox {
  vertical-align: top;
  display:inline-block
}
.checkbox-label {
  white-space: normal;
  display:inline-block
}
.tarifas{
    font-size: 20px;
    padding-left: 50px;
}
h2{
  margin-top: -70px;
  padding-left: 120px;
}
.textos{
  width: 613px;
  padding-top: 60px;
  margin-left: 800px;
  line-height: 50px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", sans-serif;
  }
  .formbold-mb-5 {
    margin-bottom: 20px;
  }
  .formbold-pt-3 {
    padding-top: 12px;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin-top: 50px;
    max-width: 623px;
    width: 623px;
  }

  .formbold-form-wrapper {
    margin: 40px;
    margin-left: 300px;
    max-width: 623px;
    width: 623px;
    background: white;
  }
  .formbold-form-label {
    display: block;
    font-weight: 500;
    font-size: 16px;
    max-width: 623px;
    width: 623px;
    color: #07074d;
    margin-bottom: 12px;
  }
  .formbold-form-label-2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
    margin-left: 0px;
  }
  .formbold-form-input:focus {
    border-color: #003368;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold-btn {
    text-align: center;
    font-size: 20px;
    width: 400px;
    border-radius: 6px;
    padding: 14px 32px;
    border: none;
    font-weight: 800;
    background-color: #003368;
    color: white;
    cursor: pointer;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold--mx-3 {
    margin-left: -12px;
    margin-right: -12px;
  }
  .formbold-px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-full {
    width: 100%;
  }
  @media (min-width: 540px) {
    .sm\:w-half {
      width: 50%;
    }
  }

.imagen1{
    height: auto;
    width: auto;
    display: block;
    margin-left: 800px;
    margin-top: -850px;
}
#opciones, input{
    display: inline-block;
}

</style>

<script>
    function check(input)
    {
    	
    	var checkboxes = document.getElementsByClassName("radioCheck");
    	
    	for(var i = 0; i < checkboxes.length; i++)
    	{
    		//uncheck all
    		if(checkboxes[i].checked == true)
    		{
    			checkboxes[i].checked = false;
    		}
    	}
    	
    	//set checked of clicked object
    	if(input.checked == true)
    	{
    		input.checked = false;
    	}
    	else
    	{
    		input.checked = true;
    	}	
    }
</script>