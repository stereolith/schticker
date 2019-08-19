# AR-Projekt *Schticker*

Die App **Schticker** entstand im Rahmen der AM3b-Übung [Augmented City – Street Art, Embodiment, Cultural Heritage & AR](http://lehre.idh.uni-koeln.de/lehrveranstaltungen/sosem19/augmented-city-street-art-cultural-heritage-ar/) im Sommersemester 2019, einer Lehrveranstaltung des Instituts für Digital Humanitites der Universität zu Köln. 

Mitglieder der Projektgruppe: Kim Roland, Lukas Mönch, Anna Casters.

### Projektidee 
Jeder und jedem von uns begegnen (gerade in Köln) täglich zahlreiche Sticker auf Straßenlaternen, Türen, Hauswänden, Stromkästen oder an Bahnhaltestellen. 
Oft weiß man jedoch nicht auf Anhieb, für was ein bestimmter Sticker steht; ob es sich dabei um Werbung oder doch um ein Kunst- oder Street Art-Projekt handelt.
**Schticker**, eine Augmented Reality App, ermöglicht deshalb das Entschlüsseln, Kategorisieren und Wiederfinden von Stickern im urbanen Raum.

<BILD/VIDEO>

### Umsetzung/Nutzung der App
Beim Start von *Schticker* wird die Handykamera geöffnet, um direkt mit dem Scannen von Stickern beginnen zu können. Wird ein Sticker erkannt, erscheint eine sich bewegende Kugel, über die man durch Anklicken zur *Info-Karte* des Stickers gelangt. Dort werden Kurzinformationen zu dem Sticker angezeigt. Über den Button *mehr Infos* gelangt man zur *Detailseite* des jeweiligen Stickers.

Auf der *Detailseite* ist ein Bild des Stickers sowie eine Kurzbeschreibung zu finden. Außerdem wurde eine Karte implementiert, auf der der Standort des Stickers mit einer Stecknadel angezeigt wird. Klickt man diese an, wird der hinterlegte Standort des Stickers in Google Maps geöffnet, um potenziell dorthin navigieren zu können.
Des Weiteren findet sich auf der *Detailseite* die Sektion *Dieser Schticker im Netz*, unter der Links zu den Social-Media-Profilen oder Websiten der KünstlerInnen oder InitiatorInnen des Stickers hinterlegt sind.

Alle Sticker, die sich in der App befinden, sind in der *Liste* aufgeführt und darüber auswählbar. Klickt man einen Sticker aus der *Liste* an, so gelangt man zu dessen jeweiliger *Detailseite*.

NutzerInnen können natürlich auch selbst Sticker zur App hinzufügen. Dazu wählen Sie über das Menü den Punkt *Hinzufügen* aus. Es lässt sich ein Foto aufnehmen oder aus den bereits aufgenommenen Fotos des Gerätes wählen. Außerdem lässt sich der aktuelle Standort der Nutzerin/des Nutzers verwenden, um diesen dem Sticker-Eintrag hinzuzufügen, sollte sich die Nutzerin/der Nutzer in direkter Nähe des Stickers befinden. 

Wird die Eingabe des Fotos und des Standortes bestätigt, öffnet sich eine weitere Seite, auf der die Informationen zum Sticker, wie Beschreibung, UrheberIn und Weblinks hinterlegt werden können. Durch Bestätigen wird der Sticker der App-Datenbank hinzugefügt. Die so erstellte *Detailseite* lässt sich direkt oder alternativ über die *Liste* aufrufen.

Über den  in der oberen linken Bildschirmecke eingeblendeten Button gelangt man in das Menü der App. Darüber sind alle bisher implementieren Funktionen *Scannen*, *Listenansicht* und *Hinzufügen* abrufbar.

### Verwendete Technologien
Im Rahmen der technischen Umsetzung wurde verschiedene Software genutzt. Kleine 3D-Modelle und Animationen wurden in **3ds Max** erstellt.

Die App wurde mithilfe von **React Native** und **Viro** realisiert.
