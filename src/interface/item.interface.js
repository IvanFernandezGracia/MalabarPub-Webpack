"use strict";

export  class ItemInterface {
  constructor({
    name,
    descriptionsShort,
    descriptions,
    price,
    stock,
    category,
    mainCategory,
    profilePicture,
    otherPicture,
  }) {
    this.name_ = name || "Sin Nombre";
    this.descriptionsShort_ = descriptionsShort || "Sin Descripcion Corta";
    this.descriptions_ = descriptions || "Sin Descripcion";
    this.price_ = price || 0;
    this.stock_ = stock || 0;
    this.category_ = category || "Sin Categoria";
    this.mainCategory_ = mainCategory || "Sin Categoria Principal";
    this.profilePicture_ = profilePicture || "Sin Foto Perfil";
    this.otherPicture_ = otherPicture || "Sin Otras Foto";
  }
}

// this.name_ = objectItem.name  || "Sin Nombre";
// this.descriptionsShort_ = objectItem.descriptionsShort|| "Sin Descripcion Corta";
// this.descriptions_ = objectItem.descriptions|| "Sin Descripcion";
// this.price_ = objectItem.price|| 0;
// this.stock_ = objectItem.stock|| 0;
// this.category_ = objectItem.category|| "Sin Categoria";
// this.mainCategory_ = objectItem.mainCategory|| "Sin Categoria Principal";
// this.profilePicture_ = objectItem.profilePicture|| "Sin Foto Perfil";
// this.otherPicture_ =objectItem.otherPicture || "Sin Otras Foto";
