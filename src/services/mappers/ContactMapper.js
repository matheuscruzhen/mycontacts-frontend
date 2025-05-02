class ContactMapper {
  toPersistance(domainContact) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(persistanceContact) {
    // return {
    //   name: persistanceContact.name,
    //   email: persistanceContact.email,
    //   phone: persistanceContact.phone,
    //   categoryId: persistanceContact.category_id,
    // };
  }
}

export default new ContactMapper();
