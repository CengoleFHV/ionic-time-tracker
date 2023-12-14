use magic_crypt::{new_magic_crypt, MagicCryptTrait};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn encrypt(to_encrypt: &str) -> String {
    let mc = new_magic_crypt!("magic_word", 256);

    let encrypted = mc.encrypt_str_to_base64(to_encrypt);

    return encrypted;
}

#[wasm_bindgen]
pub fn decrypt(to_decrypt: &str) -> String {
    let mc = new_magic_crypt!("magic_word", 256);

    let decrypted = mc.decrypt_base64_to_string(&to_decrypt).unwrap();

    return decrypted;
}
