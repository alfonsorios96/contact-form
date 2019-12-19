import { html, LitElement } from 'lit-element';
import style from './contact-form-styles.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-text-field/vaadin-text-field'

class ContactForm extends LitElement {
  static get properties() {
    return {
      gendersCatalog: Array,
      bloodTypeCatalog: Array
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.gendersCatalog = [
      {
        label: 'Masculino',
        value: 'H'
      },
      {
        label: 'Femenino',
        value: 'M'
      }
    ];
    this.bloodTypeCatalog = [
      {
        label: 'o-',
        value: 'o-'
      },
      {
        label: 'o+',
        value: 'o+'
      },
      {
        label: 'a-',
        value: 'a-'
      },
      {
        label: 'a+',
        value: 'a+'
      },
      {
        label: 'b-',
        value: 'b-'
      },
      {
        label: 'b+',
        value: 'b+'
      },
      {
        label: 'ab-',
        value: 'ab-'
      },
      {
        label: 'ab+',
        value: 'ab+'
      }
    ];
  }

  render() {
    return html`
        <div class="container">
          <vaadin-text-field id="name" placeholder="Nombre" label="Nombre"></vaadin-text-field>
          <vaadin-text-field id="lastName" placeholder="Apellido" label="Apellido"></vaadin-text-field>
          <vaadin-combo-box id="gender" .items="${this.gendersCatalog}" placeholder="Sexo" label="Sexo"></vaadin-combo-box>
          <vaadin-text-field id="nss" placeholder="NSS" label="NSS"></vaadin-text-field>
          <vaadin-combo-box id="bloodType" .items="${this.bloodTypeCatalog}" placeholder="Tipo de sangre" label="Tipo de sangre"></vaadin-combo-box>
          <vaadin-text-field id="phone" placeholder="Telefono" label="Telefono"></vaadin-text-field>
          <vaadin-text-field id="address" placeholder="Direccion" label="Direccion"></vaadin-text-field>
          <vaadin-text-field id="email" placeholder="Correo electronico" label="Correo electronico"></vaadin-text-field>
          <vaadin-text-field id="curp" placeholder="CURP" label="CURP"></vaadin-text-field>
          <vaadin-text-field id="rfc" placeholder="RFC" label="RFC"></vaadin-text-field>
          <vaadin-button @click="${this.addSkill}">Nueva habilidad</vaadin-button>
        </div>
        <div class="container skills" id="skillsContainer">

        </div>
        <vaadin-button @click="${this.saveContact}">Guardar</vaadin-button>
      `;
    }

    addSkill(){
      const container = this.shadowRoot.querySelector('#skillsContainer');
      container.innerHTML += `<vaadin-text-field class="skill" placeholder="Habilidad" label="Habilidad"></vaadin-text-field>`;
    }

    saveContact() {
      const name = this.shadowRoot.querySelector('#name');
      const lastName = this.shadowRoot.querySelector('#lastName');
      const gender = this.shadowRoot.querySelector('#gender');
      const nss = this.shadowRoot.querySelector('#nss');
      const bloodType = this.shadowRoot.querySelector('#bloodType');
      const phone = this.shadowRoot.querySelector('#phone');
      const address = this.shadowRoot.querySelector('#address');
      const email = this.shadowRoot.querySelector('#email');
      const curp = this.shadowRoot.querySelector('#curp');
      const rfc = this.shadowRoot.querySelector('#rfc');

      const skills = this.shadowRoot.querySelectorAll('.skill');
      const newSkills = [];

      for(const skill of skills) {
          newSkills.push(skill.value);
          skill.parentNode.removeChild(skill);
      }

      this.dispatchEvent(new CustomEvent('register-contact-request', {
        detail: {
          name: name.value,
          lastName: lastName.value,
          gender: gender.value,
          nss: nss.value,
          bloodType: bloodType.value,
          phone: phone.value,
          address: address.value,
          email: email.value,
          curp: curp.value,
          rfc: rfc.value,
          skills: newSkills
        }
      }));

      name.value = '';
      lastName.value = '';
      gender.value = '';
      nss.value = '';
      bloodType.value = '';
      phone.value = '';
      address.value = '';
      email.value = '';
      curp.value = '';
      rfc.value = '';
    }
}

window.customElements.define("contact-form", ContactForm);
