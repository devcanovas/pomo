#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{ generate_context, Manager, SystemTray, SystemTrayEvent, Window };
use tauri_plugin_positioner::{Position, WindowExt};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let splashscreen_window = app.get_window("splashscreen").unwrap();
            let main_window = app.get_window("main").unwrap();
            tauri::async_runtime::spawn(async move {
                splashscreen_window.move_window(Position::RightCenter).unwrap();
                std::thread::sleep(std::time::Duration::from_secs(5));
                splashscreen_window.close().unwrap();
                main_window.move_window(Position::RightCenter).unwrap();
                main_window.show().unwrap();
            });
            Ok(())
        })
        .plugin(tauri_plugin_positioner::init())
        .system_tray(SystemTray::new().with_id("PomoCode"))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                let window: Window = app.get_window("main").unwrap();
                // use TrayCenter as initial window position
                let _ = window.move_window(Position::RightCenter);
                open_close_tray(window);
            }
            _ => {}
        })
        .run(generate_context!())
        .expect("error while running tauri application")
}

fn open_close_tray(window: Window) {
    if window.is_visible().unwrap() {
        window.hide().unwrap();
    } else {
        window.show().unwrap();
        window.set_focus().unwrap();
    }
}
