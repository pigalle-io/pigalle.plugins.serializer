# API reference of :

A base to create serializers for the Pigalle framework. 

---
&#x1F34E; **__Warning !__ Work in progress...**
---
## API

<a name="module_serializer-plugin-base"></a>

### serializer-plugin-base
A base to create serializers usable with the Pigalle framework.

**Example**  
```js
const {SerializerPluginBase} = require('@pigalle/plugins.serializer')

// A very simple JSON serializer for the Pigalle framework.

class SimpleJsonSerializer extends SerializerPluginBase {

  // Override inherited serialize method
  serialize(o) {
    return JSON.stringify(o)
  }

  // Override inherited unserialize method
  unserialize(o) {
    return JSON.parse(o)
  }

}
```

* [serializer-plugin-base](#module_serializer-plugin-base)
    * [~SerializerPluginBase](#module_serializer-plugin-base..SerializerPluginBase)
        * [new SerializerPluginBase(...args)](#new_module_serializer-plugin-base..SerializerPluginBase_new)
        * [.serialize()](#module_serializer-plugin-base..SerializerPluginBase+serialize)
        * [.unserialize()](#module_serializer-plugin-base..SerializerPluginBase+unserialize)
    * [~PIGALLE_TYPE](#module_serializer-plugin-base..PIGALLE_TYPE) : <code>string</code>

<a name="module_serializer-plugin-base..SerializerPluginBase"></a>

#### serializer-plugin-base~SerializerPluginBase
A base class to create serializers for the Pigalle framework.

**Kind**: inner class of [<code>serializer-plugin-base</code>](#module_serializer-plugin-base)  
**Access**: public  

* [~SerializerPluginBase](#module_serializer-plugin-base..SerializerPluginBase)
    * [new SerializerPluginBase(...args)](#new_module_serializer-plugin-base..SerializerPluginBase_new)
    * [.serialize()](#module_serializer-plugin-base..SerializerPluginBase+serialize)
    * [.unserialize()](#module_serializer-plugin-base..SerializerPluginBase+unserialize)

<a name="new_module_serializer-plugin-base..SerializerPluginBase_new"></a>

##### new SerializerPluginBase(...args)
Create a new instance of {SerializerPluginBase}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="module_serializer-plugin-base..SerializerPluginBase+serialize"></a>

##### serializerPluginBase.serialize()
An unimplemented abstract function to serialize an object.

**Kind**: instance method of [<code>SerializerPluginBase</code>](#module_serializer-plugin-base..SerializerPluginBase)  
**Throws**:

- <code>NotImplementedError</code> 

<a name="module_serializer-plugin-base..SerializerPluginBase+unserialize"></a>

##### serializerPluginBase.unserialize()
An unimplemented abstract function to unserialize a string or a buffer.

**Kind**: instance method of [<code>SerializerPluginBase</code>](#module_serializer-plugin-base..SerializerPluginBase)  
**Throws**:

- <code>NotImplementedError</code> 

<a name="module_serializer-plugin-base..PIGALLE_TYPE"></a>

#### serializer-plugin-base~PIGALLE_TYPE : <code>string</code>
**Kind**: inner constant of [<code>serializer-plugin-base</code>](#module_serializer-plugin-base)  
## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 [SAS 9 Février](https://9fevrier.com/)
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>

***

_Documentation generated on Fri, 23 Feb 2018 20:48:06 GMT_

**Copyright &copy; 2018 [SAS 9 Février](https://9fevrier.com/)**
