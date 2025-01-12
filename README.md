# be-mediating (🕊️) [WIP]

## CSP unsafe example

The following example is "close to the platform," which unfortunately means it won't survive minimum recommended CSP scrutiny.  This first example uses the canonical name "be-mediating" for the custom attribute base.

```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script
        be-mediating="~moodStone::turn-a-leaf to toggle-element"
        onchange="event.r = {textContent: event.$.color};"
    ></script>
    <toggle-element disabled></toggle-element>
    <script 
        be-mediating="~toggleElement::toggle to mood-stone"
        onchange="event.r = {isHappy: event.$.checked}"
    ></script>
    <be-hive></be-hive>
</thin-skin>
```

Note that the event name to watch for ('turn-a-leaf') must be specified.  

The expression before the "to" uses [DSS](https://github.com/bahrus/trans-render/wiki/VIII.--Directed-Scoped-Specifiers-(DSS)) syntax.

To avoid any chance of streaming-related timing issues, always place the script element somewhere after the source element for the mediating instruction, as shown above.

The expression after the "to" is a simple css selector.  There can be multiple matching target elements (toggleElement).  If an element matching the criteria is added afterwards, it automatically gets updated.



In less formal, controlled environments, we can use a small alternative name that is not as easy to "register" in npm (for example):

```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script
        🕊️="~moodStone::turn-a-leaf to toggle-element"
        onchange="event.r = {textContent: event.$.color};"
    ></script>

    <toggle-element disabled></toggle-element>
    <script 
        🕊️="~toggleElement::toggle to mood-stone"
        onchange="event.r = {isHappy: event.$.checked};"
    ></script>
    <be-hive></be-hive>
</thin-skin>
```



## CSP safe example

This example can be made to work with CSP if the proper hash token is added to the meta / http header:


```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule 🕊️="~moodStone::turn-a-leaf to toggle-element">({
        textContent: e.$.color
    })</script>

    <toggle-element disabled></toggle-element>
    <script nomodule 🕊️="~toggleElement::toggle to mood-stone">({
        isHappy: e.$.checked},
    )}</script>
    <be-hive></be-hive>
</thin-skin>
```

<!-- "defer-hydration" also works instead of disabled. [TODO] -->





The following table lists different scenarios, and where each alternative enhancement shines

| Scenario                                                                                                                                                                    | Best Fit                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Calculate the "main property"* based on aggregating values of multiple peer elements.  Registered scripts or scripting expressions a must.                                  | [be-calculating](https://github.com/bahrus/be-calculating)   |
| Pass local property values from the adorned element to peer elements or the host on user interaction. Strictly declarative.                                                 | [be-elevating](https://github.com/bahrus/be-elevating)       |
| Invoke method of host or peer element by name.  Purely declarative.                                                                                                         | [be-invoking](https://github.com/bahrus/be-invoking)         |
| Two way bind, strictly declaratively, between an element and another peer element or the host.                                                                              | [be-bound](https://github.com/bahrus/be-bound)               |
| Observe one or more peer elements and/or the host, and pull in basic aggregated value to one or more local properties.  Mostly declarative, but some script support also.   | [be-observant](https://github.com/bahrus/be-observant)       |
| Use the full power of JavaScript to "mediate" between peer elements and/or the host -- Merging in property values                                                           | [be-mediating](https://github.com/bahrus/be-mediating)       |



\* By "main property" I mean the "most important" property for an element -- textContent for a div, value for the output / input element, href for the anchor tag, for example.

"be-mediating", the name of this package, is the canonical name for this element enhancement.

## Does this overlap 100% with be-observing?

In the table above, this enhancement overlaps most heavily with *be-observing*.

These are the superpowers that be-mediating possesses, where *be-observing* falls short:

1.  Easier support for script tags.  *be-observing* doesn't provide any specific support for script tags, which may be easier to use, especially when working with quotes, double quotes, and other risky characters.  As the documentation for *be-observing*, indicates, it can work with a loosely coupled enhancement, like *be-eventing*, but it is a little more clunky. [TODO]
2.  *be-mediating* can transmit updates to multiple target elements [TODO]
3.  The first instance of a mediating expression can be "registered" as a custom element, and reused with other markup where that makes sense.  In fact, even the first instance can be registered outside the template and referenced [TODO]

## Registering a scriptlet as a web component

```html
 <thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule=mood-changer 🕊️="~moodStone::turn-a-leaf to toggle-element">({
        textContent: e.$.color
    )}</script>

    <toggle-element disabled></toggle-element>
        <script nomodule="mood-changer" 🕊️="~toggleElement::toggle to mood-stone">({
        isHappy: e.$.checked
    )}</script>
    <be-hive></be-hive>
</thin-skin>


 <thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule="mood-changer" ></script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```
