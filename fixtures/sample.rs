use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct Server<'a> {
    pub name: &'a str,
    port: u16,
}

impl<'a> Server<'a> {
    pub fn new(name: &'a str) -> Self {
        Self { name, port: 8080 }
    }
    pub async fn start(&mut self) -> Result<(), Box<dyn std::error::Error>> {
        let mut m: HashMap<String, u16> = HashMap::new();
        m.insert(self.name.to_string(), self.port);
        match m.get(self.name) {
            Some(&p) if p > 0 => println!("{p}"),
            _ => return Err("bad".into()),
        }
        Ok(())
    }
}

// Line comment: rust entry
/// Doc comment for main
//! Crate-level inner doc comment
/* Block comment */
