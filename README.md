# be-mediating (🕊️) [TODO]

Attribute equivalent of [Defining a piping custom element](https://github.com/bahrus/p-et-alia)

## CSP unsafe example [TODO]

The following example is "close to the platform," which unfortunately means it won't survive minimum recommended CSP scrutiny.  This first example uses the canonical name "be-mediating" for the custom attribute base.

```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script
        be-mediating="between ~moodStone and ~toggleElement::change"
        onkeyup="event.r = {isHappy: event.f.toggleElement.checked}"
        onkeydown="event.r = {textContent: event.f.moodStone.color}"
    ></script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```

In less formal, controlled environments, we can use a small alternative name that is not as easy to "register" in npm (for example):

```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script
        🕊️="between ~moodStone and ~toggleElement::change"
        onkeyup="event.r = {isHappy: event.f.toggleElement.checked}"
        onkeydown="event.r = {textContent: event.f.moodStone.color}"
    ></script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```



## CSP safe example [TODO]

This example can be made to work with CSP if the proper hash token is added to the meta / http header:


```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule 🕊️="between ~moodStone and ~toggleElement::change">({
        '^': e => e.r = {isHappy: e.f.toggleElement.checked},
        'Y': e => e.r = {textContent: event.f.moodStone.color}
    )}</script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```

"defer-hydration" also works instead of disabled. [TODO]


## many-to many? [TODO]

The example above demonstrates a 1-1.  Can we extend that?


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
3.  The first instance of a mediating expression can be "registered" as a custom element, and reused with other markup where that makes sense.  In fact, even the first instance can be registered outisde the template and referenced [TODO]

```html
<thin-skin>
    #shadow
    <mood-stone></mood-stone>
    <script nomodule=mood-changer 🕊️></script>
    <toggle-element disabled></toggle-element>

    <be-hive></be-hive>
</thin-skin>
```
