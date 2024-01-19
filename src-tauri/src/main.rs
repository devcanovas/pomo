#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, generate_context, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, Window};
use tauri_plugin_positioner::{Position, WindowExt};


fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let tray_menu = SystemTrayMenu::new().add_item(quit);
    tauri::Builder::default()
        .plugin(tauri_plugin_positioner::init())
        .system_tray(SystemTray::new().with_menu(tray_menu).with_id("PomoCode"))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                let window: Window = app.get_window("main").unwrap();
                // use TrayCenter as initial window position
                let _ = window.move_window(Position::TopRight);
                if window.is_visible().unwrap() {
                    window.hide().unwrap();
                } else {
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
            },
            _ => {}
        })
        .run(generate_context!())
        .expect("error while running tauri application")
}
