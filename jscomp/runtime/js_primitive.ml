(* Copyright (C) 2015-2016 Bloomberg Finance L.P.
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)





(** *)

let is_nil_undef (x : _ Js.null_undefined) = 
  (Obj.magic x) == Js.null ||  (Obj.magic x) == Js.undefined

let null_undefined_to_opt ( x : 'a Js.null_undefined) = 
  if (Obj.magic x) == Js.null ||  (Obj.magic x) == Js.undefined then 
    None 
  else Some (Obj.magic x : 'a)

let undefined_to_opt ( x : 'a Js.undefined) = 
    if (Obj.magic x) == Js.undefined then None 
    else Some (Obj.magic x : 'a)

let null_to_opt ( x : 'a Js.null) = 
  if (Obj.magic x) == Js.null then None 
  else Some (Obj.magic x : 'a) 

let option_get (x : 'a option) : 'a Js_undefined.t = 
  match x with 
  | None -> Js_undefined.empty
  | Some x -> Js_undefined.return x 

(** [input] is optional polymorphic variant *)  
let option_get_unwrap (x : 'a option) : _ Js_undefined.t =
  match x with
  | None -> Js.undefined
  | Some x -> Js_undefined.return (Obj.field (Obj.repr x) 1)

