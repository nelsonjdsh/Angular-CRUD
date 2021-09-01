import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  Clientes: any = [];
  accion = 'Agregar';
  form: FormGroup;
  id_cliente: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _ClienteService: ClienteService) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      Cedula: ['', Validators.required],
      Correo: ['', Validators.required],
      Telefono: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.GetClientes();
  }

  GetClientes() {
    this._ClienteService.getClientes().subscribe(data => {
      console.log(data);
      this.Clientes = data;
    }, error => {
      console.log(error);
    })
  }

  guardarCliente() {

    const cliente: any = {
      nombre_cliente: this.form.get('Nombre')?.value,
      apellido_cliente: this.form.get('Apellido')?.value,
      cedula_cliente: this.form.get('Cedula')?.value,
      correo_cliente: this.form.get('Correo')?.value,
      telefono_cliente: this.form.get('Telefono')?.value,
    }

    if(this.id_cliente == undefined) {
        this._ClienteService.saveCliente(cliente).subscribe(data => {
          this.toastr.success('El cliente fue registrado con exito!', 'Cliente Registrado');
          this.GetClientes();
          this.form.reset();
        }, error => {
          this.toastr.error('Ha Ocurrido un Error!','Error')
          console.log(error);
        })
    }else {

      cliente.id_cliente = this.id_cliente;
      this._ClienteService.updateCliente(this.id_cliente,cliente).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id_cliente = undefined;
        this.toastr.info('El cliente fue actualizado con exito!', 'Cliente Actualizado');
        this.GetClientes();
      }, error => {
        console.log(error);
      })

    }

   
  }

  eliminarcliente(id_cliente: number) {
    this._ClienteService.deleteCliente(id_cliente).subscribe(data => {
      this.toastr.error('El cliente fue eliminado con exito!','Cliente Eliminado');
      this.GetClientes();
    }, error => {
      console.log(error);
    })

  }

  editarcliente(cliente: any) {
    this.accion = 'Editar';
    this.id_cliente = cliente.id_cliente;
    this.form.patchValue({
      Nombre: cliente.nombre_cliente,
      Apellido: cliente.apellido_cliente,
      Cedula: cliente.cedula_cliente,
      Correo: cliente.correo_cliente,
      Telefono: cliente.telefono_cliente
    })
  }

}
